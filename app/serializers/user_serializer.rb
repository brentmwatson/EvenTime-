class UserSerializer < ActiveModel::Serializer
  attributes :id, :authentication_token, :email
  has_many :events # arrays the events
end
