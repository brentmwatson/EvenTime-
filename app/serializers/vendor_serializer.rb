class VendorSerializer < ActiveModel::Serializer
  attributes :id, :service
  has_many :milestones # arrays the events
  has_one :address
  has_one :contact, :through => :addresses
end
