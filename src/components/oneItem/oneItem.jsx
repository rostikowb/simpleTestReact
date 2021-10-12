import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import s from './oneItem.module.css'

export default function OneItem({data}) {
  let {title, img, desc, link} = data;

  title = title.slice(1, 32);
  desc = desc.slice(1, 100)+'...';

  return (
    <Card className={s.oneCard}>
      <a className={s.link_title} href={link}>
        <CardHeader className={s.title} title={title}/>
      </a>
      <CardMedia
        className={s.img}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography className={s.text} variant="body2" component="p">
          {desc}
        </Typography>
      </CardContent>
      <CardActions className={s.link} disableSpacing>
        <a href={link}>Перейти</a>
      </CardActions>
    </Card>
  );
}