class ContactSerializer < ActiveModel::Serializer
  attributes :id, :f_name, :l_name, :phone_num, :role
  has_one :address
  belongs_to :vendor
end
