import React from "react";
import Head from "next/head";

export default function HtmlHead() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>
        Kyazoonga - Buy Tickets for Concerts, Cricket, Events, Movies, Theatre,
        Sports, Amusement Parks, more.
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      <meta
        name="description"
        content="Kyazoonga - Buy Tickets for Concerts, Cricket, Events, Movies, Theatre, Sports, Amusement Parks, more."
      />
      <meta
        name="keywords"
        content="sport tickets, buy cricket tickets, concert tickets, cricket world cup tickets, buy movie tickets, movie tickets online, world cup 2015 ticket, cricket world cup hospitality package, event tickets booking, live event tickets, icc cricket tickets for sale, amusement parks tickets, buy cricket bats, cricket store, buy books online, buy sports merchandise, book online tickets, cricket match tickets, cricket world cup tickets, buy concert tickets online, buy tickets online"
      />
      <link rel="shortcut icon" href="static/images/favicon_green.ico" />
      <link rel="stylesheet" href="static/css/bootstrap.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="static/css/site.css" />
    </Head>
  );
}
