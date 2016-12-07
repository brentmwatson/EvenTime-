class UsersController < ApplicationController

  # def index
  #   @user=User.all
  # end
  #
  # def new
  #   @user=User.new
  # end
    def show
      render json: current_user
    end

  #
  # def create
  #   @user=User.new(user_params)
  #   # determiner what to do with the parts of the table
  #   if @user.save
  #   #serializer
  #   else
  #
  #   end
  # end
  #
  #
  private
  #being passed to @user
  def user_params
    params.require(:user).permit(:login=>params[:email][:password])
  end

  # def default_serializer_options
  #   {root: true}
  # end
end
