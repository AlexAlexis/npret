class ProblemsController < ApplicationController

  def new
    @problem = Problem.new({name: 'Пошкодження'})
  end

  def create
    @problem = Problem.create(problem_params)
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
  end

  def show
  end
  def list
    @problem = Problem.all
  end
  private
  def problem_params
    params.require(:problem).permit(:name, :consignmentNote,:socialNumber, :passport,
    :description, :telephoneNumber, :decision, :claimSum, :insuranceSum)
  end
end
