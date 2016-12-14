class Event < ApplicationRecord
  belongs_to :user
  has_many :milestones
  has_many :vendors, :through => :milestones
end
