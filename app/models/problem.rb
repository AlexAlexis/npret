class Problem < ApplicationRecord

  validates_presence_of :name
  validates_presence_of :consignmentNote
  validates_presence_of :socialNumber
  validates_presence_of :passport
  validates_presence_of :telephoneNumber
  validates_presence_of :claimSum
  validates_presence_of :insuranceSum

end
