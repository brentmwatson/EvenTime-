class Users::SessionsController < Devise::SessionsController

  #  before_action :configure_sign_in_params, only: [:create]
  #  before_action :require_no_authentication, :only => [:create]
  #  include Devise::Controllers::InternalHelpers
  #  before_filter :ensure_params_exist
  skip_before_action :require_no_authentication
  respond_to :json

  # # GET /resource/sign_in
  # def new
  # end

  def create
    #find user for session using resource variable
    #receiving user [email [user[email,password,auth_token]]]
    resource = User.find_for_database_authentication(:email=>params[:user][:email])
      #User(class).find_for(method)...(email(hash)=>[key][value])
    return invalid_login_attempt unless resource
      # if not exsistant return this unless(method) resource is good
    if resource.valid_password?(params[:user][:password])
      sign_in("user", resource)
        # Send back the root 'user' with the resourse (devise is silly)
        # {user [email [:user [:email, password, authentication_token]]]}
      render :json => resource, :include => ['events.milestones'], :status=>201
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
