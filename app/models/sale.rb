class Sale < ApplicationRecord

  def self.active
    where("sales.starts_on_date <= ? AND sales.ends_on >= ?", Date.current, Date.current)
  end

  def finished?
    ends_on < Date.current
  end

  def upcoming?
    starts_on_date > Date.current
  end

  def active?
    !upcoming? && !finished?
  end
  
end
