class Vendor < ApplicationRecord
  # has_many :agreements
  has_many :milestones
  has_one :address
  belongs_to :event
  has_one :contact, :through => :address
end
