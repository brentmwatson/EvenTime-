class Users::SessionsController < Devise::SessionsController
  # UNCOMMENT *************
  # before_action :configure_sign_in_params, only: [:create]
  # :require_no_authentication, :only => [:create ]
  #   include Devise::Controllers::InternalHelpers
  #
  #   before_filter :ensure_params_exist
  #
  #   respond_to :json
  #
  #  # GET /resource/sign_in
  #  # def new
  #  #   super
  #  # end
  #
  #   def create
  #     build_resource
  #     resource = User.find_for_database_authentication(:login=>params[:user_login][:login])
  #     return invalid_login_attempt unless resource
  #
  #     if resource.valid_password?(params[:user_login][:password])
  #       sign_in("user", resource)
  #       render :json=> {:success=>true, :auth_token=>resource.authentication_token, :login=>resource.login, :email=>resource.email}
  #       return
  #     end
  #     invalid_login_attempt
  #   end
  #
  #   def destroy
  #     sign_out(resource_name)
  #   end
  #
  #   protected
  #   def ensure_params_exist
  #     return unless params[:user_login].blank?
  #     render :json=>{:success=>false, :message=>"missing user_login parameter"}, :status=>422
  #   end
  #
  #   def invalid_login_attempt
  #     warden.custom_failure!
  #     render :json=> {:success=>false, :message=>"Error with your login or password"}, :status=>401
  #   end
  #
  #  # If you have extra params to permit, append them to the sanitizer.
  #  # def configure_sign_in_params
  #  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  #  # end
  # ****************
end
