class UsersController < ApplicationController
  def index
    sleep 1
    @user = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new({first_name: 'First_name'})
  end

  def create
    @user = User.create(user_params)
    respond_to do |format|
      format.html { redirect_to users_url }
      format.js
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.update(user_params)
    redirect_to(users_path)
  end

  def delete
    @user = User.find(params[:id])
    @user.destroy
    redirect_to(users_path)

  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to(users_path)
  end


  private
  def user_params
  params.require(:user).permit(:first_name, :last_name, :phone, :email)
  end
end
