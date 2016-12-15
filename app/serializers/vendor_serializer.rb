class VendorSerializer < ActiveModel::Serializer
  attributes :id, :service
  belongs_to :address
  belongs_to :contact

end
