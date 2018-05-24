class Problem < ApplicationRecord


  def self.to_csv(options = {})
    # %w{} - array of strigns separated by ',';
    attributes = %w{name consignmentNote socialNumber passport telephoneNumber claimSum insuranceSum }

    CSV.generate(headers: true) do |csv|                 #include headers
      csv << attributes

      all.each do |problem|                             #all - list of all object
          csv << problem.attributes.values_at(*attributes)
      end
    end
  end

  


  validates_presence_of :name
  validates_presence_of :consignmentNote
  validates_presence_of :socialNumber
  validates_presence_of :passport
  validates_presence_of :telephoneNumber
  validates_presence_of :claimSum
  validates_presence_of :insuranceSum



end
