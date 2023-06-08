import React from "react";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import appoint from "../images/appointImage.png";
import news from "../images/news.jpg";
import monitor from "../images/monitor.png";

export default function Home() {
  return (
    <div className="home">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ opacity: "93%", maxWidth: 900, margin: "0 auto" }}>
            <CardContent>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Introduction
              </Typography>
              <Typography>
                In India, healthcare systems are grappling with the consequences
                of existing communicable and noncommunicable means of meeting
                people's needs. The failure of public health to make adequate
                progress on these underlying social determinants of health has
                been recognised as a glaring failure. The lack of availability
                of resources in one place and in an organised manner has led to
                several patients left untreated for their symptoms. Our main aim
                is to bring together a platform that bridges this gap between
                the healthcare system and the people.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ opacity: "93%", maxWidth: 900, margin: "0 auto" }}>
            <CardContent>
              <Typography variant="h4">Key Features</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={appoint}
                      alt="feature1"
                    />
                    <CardContent>
                      <Typography variant="h5">Online Appointments</Typography>
                      <hr />
                      <Typography variant="body2">
                        Enjoy the flexibility of choosing appointment slots
                        based on your availability, with the option to review
                        doctors' profiles, specialties and schedule
                        appointments.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={monitor}
                      alt="feature3"
                    />
                    <CardContent>
                      <Typography variant="h5">History Monitoring</Typography>
                      <hr />
                      <Typography variant="body2">
                        Efficiently track and manage patients' medical history,
                        including diagnoses, treatments, and medications, for
                        comprehensive healthcare management.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={news}
                      alt="feature2"
                    />
                    <CardContent>
                      <Typography variant="h5">Latest News</Typography>
                      <hr />
                      <Typography variant="body2">
                        Get insights into health-related topics, disease
                        outbreaks, and medical innovations that can empower you
                        to make informed decisions about your well-being.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
            <div className="card-footer text-center">
              <Typography variant="body2">
                &copy;2022 Copyright Reserved
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
