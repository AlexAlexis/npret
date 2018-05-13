class ProblemsController < ApplicationController

  def new
    @problem = Problem.new({name: 'Пошкодження'})

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
      if @problem.save(problem_params)
        redirect_to root_path
      else
      render(partial: 'form')
      end

  end

  def update
  end

  def edit
  end

  def destroy
  end

  def index
    sleep 1

  end

  def show
  end
  def list
    @problem = Problem.all
  end

  def searchTablet
    @searchData = Problem.new

  end

  def searchEngine
    @resultArray = []
    @searchData = Problem.new(problem_params)
    @problems = Problem.all
      @problems.each do |problem|
        if problem.socialNumber == @searchData.socialNumber
          @resultArray << problem
        elsif problem.passport == @searchData.passport
          @resultArray << problem
        elsif problem.telephoneNumber == @searchData.telephoneNumber
          @resultArray << problem
        end
      end

    respond_to do |format|
    format.html {redirect_to problems_url}
    format.js
    end

  end

  private
  def problem_params
    params.require(:problem).permit(:name, :consignmentNote,:socialNumber, :passport,
    :description, :telephoneNumber, :decision, :claimSum, :insuranceSum)
  end
end
