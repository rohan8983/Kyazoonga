import React from "react";
import { TicketBox } from "../Commans/TicketBox";

export default function SectionFirst(props) {
  return (
    <section className="hot-ticket-sec ticket-boxes">
      <div className="container">
        <h2 className="site-title">
          Hot Tickets <small>Get tickets to your favourite events</small>
        </h2>
        <div className="row">
          {props.hotTickets.map((ticket, index) => {
            return <TicketBox ticket={ticket} key={index} />;
          })}
        </div>
        <div className="btn-sec text-center p-20 pt-0">
          <a href="#" className="btn btn-primary btn-custome-lg">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
