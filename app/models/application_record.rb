class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def to_csv(options = {})
    # %w{} - array of strigns separated by ',';
    attributes = %w{name consignmentNote socialNumber passport telephoneNumber claimSum insuranceSum }

    CSV.generate(headers: true) do |csv|                 #include headers
      csv << attributes

      all.each do |problem|                             #all - list of all object
          csv << problem.attributes.values_at(*attributes)
      end
    end
  end

  



end
