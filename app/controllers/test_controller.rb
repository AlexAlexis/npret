class TestController < ApplicationController

  def index
    @a = "25"
    @ass = ["24",25, "BPPPB","Noober","Pudges"]
    @user = User.all
  end


end
