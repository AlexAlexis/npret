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

  def social_number
    "It's " + self.socialNumber.to_s + ", find your relations"  # instance method, 'self' - name of a model
  end

  def self.have_same_values?(problem, options = {})
    all.each do |f|
      if f.socialNumber == problem.socialNumber
      return flash[:notice] = "Клієнт з ІНН #{problem.socialNumber} вже мав претензії. Перевірте відбором."
    elsif f.passport == problem.passport
      return  flash[:notice] = "Клієнт з паспортом: #{problem.passport} вже мав претензії. Перевірте відбором."

      elsif f.telephoneNumber == problem.telephoneNumber
      return  flash[:notice] = "Клієнт з телефоном: #{problem.telephoneNumber} вже мав претензії. Перевірте відбором."

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
