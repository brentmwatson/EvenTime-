class Vendor < ApplicationRecord
  # has_many :agreement
  has_many :milestones
  has_one :address
  belongs_to :event
  has_one :contact, :through => :address
end
