class Sale < ApplicationRecord

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
