class Contact < ApplicationRecord
  has_one :address
  has_one :vendor, :through => :address
end
