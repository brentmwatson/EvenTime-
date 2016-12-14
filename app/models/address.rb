class Address < ApplicationRecord
  has_one :vendor
  belongs_to :contact
end
