class ProblemsController < ApplicationController

  $array;

  def new
    @problem = Problem.new()

  end

  def create
    @problem = Problem.new(problem_params)
      @problems = Problem.all

      @problems.each do |f|
        if f.socialNumber == @problem.socialNumber
        flash[:notice] = "Клієнт з ІНН #{@problem.socialNumber} вже мав претензії. Перевірте відбором."
      elsif f.passport == @problem.passport
          flash[:notice] = "Клієнт з паспортом: #{@problem.passport} вже мав претензії. Перевірте відбором."

        elsif f.telephoneNumber == @problem.telephoneNumber
          flash[:notice] = "Клієнт з телефоном: #{@problem.telephoneNumber} вже мав претензії. Перевірте відбором."

        end
      end

      @problem.save(problem_params)
        respond_to do |format|
        format.html {redirect_to problems_url}
          format.js
        end

  end

  def update
  end

  def edit
  end

  def destroy
  end

  def index
    @problems = Problem.all
    respond_to do |format|
      format.html
      format.csv { send_data @problems.to_csv, :filename => 'hello.csv' }
      format.xls { send_data @problems.to_csv(col_sep: "\t") }
    end
  end

  def show
  end
  def list
    @problem = Problem.all
    respond_to do |format|
    format.html {redirect_to problems_url}
    format.js
    end
  end

  def searchTablet
    @searchData = Problem.new
    respond_to do |format|
    format.html {redirect_to problems_url}
    format.js
    end
  end

  def searchEngine
    $resultArray = Array.new
    @searchData = Problem.new(problem_params)
    @problems = Problem.all
      @problems.each do |problem|
        if problem.socialNumber == @searchData.socialNumber
          $resultArray << problem

        elsif problem.passport == @searchData.passport
          $resultArray << problem

        elsif problem.telephoneNumber == @searchData.telephoneNumber
          $resultArray << problem

        end
      end
    Problem.where( id: $resultArray.map(&:id))
    respond_to do |format|
    format.html {redirect_to problems_url}
    format.js


    end
    def getFoundList
      respond_to do |format|
        format.html
        format.csv { send_data Problem.where( id: $resultArray.map(&:id)).to_csv, filename: 'Спиcок.csv' }
        format.xls { send_data @object.to_csv }
      end
    end


  end

  private
  def problem_params
    params.require(:problem).permit(:name, :consignmentNote,:socialNumber, :passport,
    :description, :telephoneNumber, :decision, :claimSum, :insuranceSum)
  end
end
