class ProblemsController < ApplicationController

  def new
    @problem = Problem.new({name: 'Пошкодження'})

  end

  def create
    @problem = Problem.new(problem_params)
      @problems = Problem.all
      @problems.each do |f|
        if f.socialNumber == @problem.socialNumber
        flash[:notice] = "Клієнт з таким ІНН вже мав претензії. Перевірте відбором."
        elsif f.passport == @problem.passport
          flash[:notice] = "Клієнт з таким Паспортом вже мав претензії. Перевірте відбором."
        elsif f.telephoneNumber == @problem.telephoneNumber
          flash[:notice] = "Клієнт з таким Телефоном вже мав претензії. Перевірте відбором."
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
    sleep 1
    @arr1 = ["first", "second","last","third"]
  end

  def show
  end
  def list
    @problem = Problem.all
  end

  def searchTablet

  end

  def searchEngine

  end

  private
  def problem_params
    params.require(:problem).permit(:name, :consignmentNote,:socialNumber, :passport,
    :description, :telephoneNumber, :decision, :claimSum, :insuranceSum)
  end
end
