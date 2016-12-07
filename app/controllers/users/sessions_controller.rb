class Users::SessionsController < Devise::SessionsController

#  before_action :configure_sign_in_params, only: [:create]
#  before_action :require_no_authentication, :only => [:create ]
skip_before_action :require_no_authentication
#  include Devise::Controllers::InternalHelpers

#  before_filter :ensure_params_exist
  respond_to :json

  # GET /resource/sign_in
  # def new
  # end

def show
  #to get current user
  #give back the current users
end

  def create
    # build_resource
    #add user f_name and :l_name current :user_id
    #serializer to eager load event for user
    #user has null event so feturn api (young mi handels logic)
    # should not aver to use session
    #retune user and event key

    resource = User.find_for_database_authentication(:email=>params[:user][:email])
    return invalid_login_attempt unless resource

    if resource.valid_password?(params[:user][:password])
      sign_in("user", resource)
      render :json=> resource
      return
    end
    invalid_login_attempt
  end

  def destroy
    sign_out(resource_name)
  end

  protected
  def ensure_params_exist
    return unless params[:email].blank?
    render :json=>{:success=>false, :message=>"Missing email"}, :status=>422
  end

  def invalid_login_attempt
    warden.custom_failure!
    render :json=> {:success=>false, :message=>"Error with your email or password"}, :status=>401
  end

 # If you have extra params to permit, append them to the sanitizer.
 # def configure_sign_in_params
 #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
 # end
end
