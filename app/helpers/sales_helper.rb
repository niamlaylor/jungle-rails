module SalesHelper
  def active_sale?
    # active is created in the Sale model
    Sale.active.any?
  end
end
