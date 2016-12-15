class VendorSerializer < ActiveModel::Serializer
  attributes :id, :service
  has_one :address
  belongs_to :contact

end
