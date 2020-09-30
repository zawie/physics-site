import React from 'react';
import { Card, Button, Divider} from 'antd';
import Components from "../mafApps/DemoIndex";

const demos = require('../demos.json')

export default function DemoPage({match}) {
  //Get demo key and demo information
  const { params: { key } } = match;
  const demo = demos[key]
  const DemoToRender = Components[key];
  return (
    <div>
        <div className="Main">
          {/* About Card */}
          <Card title={demo['title']} className="AboutCard" extra={<Button href='/' danger={true} type='round'>Back</Button>}>
            <DemoToRender></DemoToRender>
            <Divider orientation="left">Description</Divider>
            <p>{demo['description']}</p>
            <p><b>Instructions: </b>{demo['help']}</p>
          </Card>
        </div>
      </div>
  );
}
