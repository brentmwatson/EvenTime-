class UserSerializer < ActiveModel::Serializer
  attributes :id, :authentication_token, :email, :events
  has_many :events
end
