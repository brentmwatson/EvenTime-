class Vendor < ApplicationRecord
  # has_many :agreements
  has_many :milestones
  belongs_to :address
  has_one :contact, :through => :address
end
