import React from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import { useStyles } from "./style";

const AdminDashboard: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const itemsData = [
    {
      name: "users",
      label: "Users",
      icon: PeopleAltIcon,
      url: "users",
    },
    {
      name: "items",
      label: "Items",
      icon: FormatListBulletedIcon,
      url: "items",
    },
    {
      name: "settings",
      label: "Settings",
      icon: SettingsIcon,
      url: "settings",
    },
  ];

  return (
    <div className={classes.root}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {itemsData.map((value, index) => (
              <Grid key={index} item>
                <Card className={classes.card} onClick={() => navigate(value.url)}>
                  <CardHeader title={value.label} />
                  <CardContent>
                    <value.icon sx={{ fontSize: 100 }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
