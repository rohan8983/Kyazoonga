import React from "react";

export const TicketBox = props => {
  return (
    <div className="col-xs-12 col-sm-6 col-lg-4">
      <div className="box">
        <div className="dropdown visiter-icon">
          <a
            href="#"
            className="dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
          </a>
        </div>
        <a href="#" className="block-link">
          <div className="ticket-img">
            <img src={props.ticket.src} alt="" />
            <span className="ticket-price">{props.ticket.ticketPrice}</span>
          </div>
          <div className="ticket-info">
            <span className="time-info">{props.ticket.timeInfo}</span>
            <h3 className="ticket-title">{props.ticket.ticketTitle}</h3>
            <p className="venue-info">{props.ticket.venueInfo}</p>
          </div>
        </a>
        <div className="social clearfix">
          <div className="pull-left">
            <a className="btn btn-default btn-xs ical" href="#">
              <i className="fa fa-calendar" /> &nbsp;iCal
            </a>
            <a className="btn btn-default btn-xs ml-10" href="#">
              <i className="fa fa-calendar" /> &nbsp;Google
            </a>
          </div>
          <div className="pull-right">
            <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-facebook" />
            </a>
            <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter" />
            </a>
            <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter" />
            </a>
            <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
