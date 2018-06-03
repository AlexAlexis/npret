class Return < ApplicationRecord
	def self.to_csv(options = {})
    # %w{} - array of strigns separated by ',';
    attributes = %w{city consignmentNote cashback telephoneNumber }

    CSV.generate(headers: true) do |csv|                 #include headers
      csv << attributes

      all.each do |problem|                             #all - list of all object
          csv << problem.attributes.values_at(*attributes)
      end
    end
  end
end
