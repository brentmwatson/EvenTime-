class Users::RegistrationsController < Devise::RegistrationsController

# before_action :configure_sign_up_params, only: [:create]
# before_action :configure_account_update_params, only: [:update]


  # GET /resource/sign_up
  # def new
  # end

  # POST /resource
  # end

respond_to :json
#creates registration and user in one shot
#add user f_name and :l_name current :user_id
#retune user and event key

 def create
   user = User.new(sign_up_params)
   if user.save
     render :json =>  user, :include => ['events.milestones'] , :status=>201
     return
   else
     warden.custom_failure!
     render :json=> user.errors, :status=>422
   end
 end

  # GET /resource/edit
  # def edit
  # end

  # PUT /resource
  # def update
  # end

  def destroy
    # resource.soft_delete
    # Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    # set_flash_message :notice, :destroyed if is_flashing_format?
    # user = User.find_by(:id)
    # user = destroy
    #   render :json=> "You have successfully, deleted your account", :status=>201
  end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:user, ])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:user, ])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
