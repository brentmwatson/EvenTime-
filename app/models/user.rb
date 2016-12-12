class User < ActiveRecord::Base
  # Note: you can include any module you want. If available,
  # token authentication will be performed before any other
  # Devise authentication method.
  #
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ## Token Authenticatable
  acts_as_token_authenticatable :authentication_token

  has_many :events
  has_many :milestones, :through => :events
  # has_one :contact
end
