class Vendor < ApplicationRecord
  # has_many :agreements
  has_many :milestones
  belongs_to :address
  belongs_to :event
  belongs_to :contact
  # has_one :contact, :through => :address
end
