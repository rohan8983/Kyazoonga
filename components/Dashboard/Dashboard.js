import React, { PureComponent } from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import HotTicketSection from "../Sections/HotTicketSection";
import CategoriesSection from "../Sections/CategoriesSection";
import OnlineTicketSection from "../Sections/OnlineTicketSection";
import FeaturedInSection from "../Sections/FeaturedInSection";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { sampleAction } from "./action";

class Dashboard extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <HotTicketSection hotTickets={this.props.hotTickets} />
        <CategoriesSection categories={this.props.categories} />
        <OnlineTicketSection />
        <FeaturedInSection featuredIn={this.props.featuredIn} />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    hotTickets: state.dashboard.hotTickets,
    categories: state.dashboard.categories,
    featuredIn: state.dashboard.featuredIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sampleAction: data => dispatch(sampleAction(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
