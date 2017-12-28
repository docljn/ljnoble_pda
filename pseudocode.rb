def Ticket.sell(customer, screening)
  if customer.can_afford_screening_price?
    if screening.has_seats_empty?
      ticket = Ticket.new(customer, film, screening)
      customer_wallet -= ticket_price
      screening_empty_seats -= ticket_count
      cinema_till += ticket_price
    end
  end
end
