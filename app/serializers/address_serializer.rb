class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street, :city, :state, :zip
  has_one :address
  has_one :contact, :through => :addresses
end
