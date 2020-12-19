import React from 'react';
import { Collapse, List } from 'antd';
import {
  CustomerServiceFilled,
  LaptopOutlined,
  MobileOutlined,
  TabletOutlined
} from '@ant-design/icons';
const { Panel } = Collapse;

const phone = [
  {
    title: 'Apple iPhone SE Red 64GB',
    price: '5,239,999 UZS'
  },
  {
    title: 'Apple iPhone 11 Pro Space Gray 64GB',
    price: '10,579,999 UZS'
  },
  {
    title: 'Apple iPhone 12 Black 64GB',
    price: '10,239,999 UZS'
  },
  {
    title: 'Apple iPhone 12 Pro Silver 128GB',
    price: '14,689,999 UZS'
  },
];

const mac = [
  {
    title: 'Apple MacBook 12.0 Space Gray/1.1GHz/8GB/256GB',
    price: '11,689,999 UZS'
  },
  {
    title: 'Apple MacBook Air 13.3 Gold/1.6GHz/16GB/512GB',
    price: '15,129,999 UZS'
  },
  {
    title: 'Apple MacBook Pro 13-inch 1.4GHz/8GB/128Gb',
    price: '13,359,999 UZS'
  }
];

const ipad = [
  {
    title: 'Apple iPad Pro 11-inch Wi-Fi + Celluler 256GB Space Gray',
    price: '11,239,999 UZS'
  },
  {
    title: 'Apple iPad Pro 11-inch 2nd Generation Wi-Fi 512GB Space Gray',
    price: '14,799,999 UZS'
  },
  {
    title: 'Apple iPad Pro 12.9-inch Wi-Fi + Celluler 256GB Space Gray',
    price: '15,579,999 UZS'
  },
  {
    title: 'Apple iPad Pro 12.9-inch 4th Generation Wi-Fi 128Gb Silver',
    price: '12,579,999 UZS'
  }
];

const subList = [
  {
    sub: 'AirPods',
    key: 1,
    list: [
      {
        title: 'AirPods Pro',
        price: '2,602,999 UZS'
      },
      {
        title: 'AirPods 2',
        price: '1,951,999 UZS'
      }
    ]
  },
  {
    sub: 'Watch',
    key: 2,
    list: [
      {
        title: 'Apple Watch Hermes Series 6 44mm',
        price: '10,053,999 UZS'
      },
      {
        title: 'Apple Watch Series 6 Silver 44mm',
        price: '6,505,999 UZS'
      },
      {
        title: 'Apple Watch Series 6 Silver 40mm',
        price: '6,032,999 UZS'
      }
    ]
  },
  {
    sub: 'Others',
    key: 3,
    list: [
      {
        title: 'Apple Magic Keyboard Space Gray',
        price: '5,559,999 UZS'
      },
      {
        title: 'Apple Magic Mouse 2 Space Gray',
        price: '1,419,999 UZS'
      },
      {
        title: 'Apple iPad Pro Smart Keyboard Folio',
        price: '5,204,999 UZS'
      },
      {
        title: 'Apple Pencil 2',
        price: '1,774,999 UZS'
      }
    ]
  }
]




const genExtra = (icon) => {
  if (icon === 'a') {
    return (
      <MobileOutlined style={{ fontSize: '1.5rem', color: '#000000' }} />
    )
  } else if (icon === 'b') {
    return (
      <LaptopOutlined style={{ fontSize: '1.5rem', color: '#000000' }} />
    )
  } else if (icon === 'c') {
    return (
      <TabletOutlined style={{ fontSize: '1.5rem', color: '#000000' }} />
    )
  }
  else {
    return (
      <CustomerServiceFilled style={{ fontSize: '1.5rem', color: '#000000' }} />
    )
  }
};



function AppPricing(props) {

  return (
    <div className="container mx-auto mt-10 sm:mt-24 pt-0 sm:pt-12 md:pt-0 lg:mt-10 mb-10 relative" id="pricing">
      <div className="flex justify-center text-4xl font-bold tracking-wider pb-5">Цены</div>
      <div className="w-12 h-1 bg-secondary mx-auto mb-10"></div>
      <div className="md:w-3/5 mx-auto px-5 md:px-0">
        <Collapse className="w-full" ghost expandIconPosition='right'>
          <Panel header="iPhone" key="1" extra={genExtra('a')}>
            <List
              itemLayout="horizontal"
              dataSource={phone}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description={item.price}
                  />
                </List.Item>
              )}
            />
          </Panel>
          <Panel header="iPad" key="2" extra={genExtra('c')}>
            <List
              itemLayout="horizontal"
              dataSource={ipad}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description={item.price}
                  />
                </List.Item>
              )}
            />
          </Panel>
          <Panel header="Mac" key="3" extra={genExtra('b')}>
            <List
              itemLayout="horizontal"
              dataSource={mac}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description={item.price}
                  />
                </List.Item>
              )}
            />
          </Panel>
          <Panel header="Аксессуары" key="4" extra={genExtra('d')}>
            <List
              itemLayout="horizontal"
              dataSource={subList}
              renderItem={item => (
                <Collapse ghost expandIconPosition='right'>
                  <Panel header={item.sub} key={item.key}>
                    <List
                      itemLayout="horizontal"
                      dataSource={item.list}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            title={item.title}
                            description={item.price}
                          />
                        </List.Item>
                      )}
                    />
                  </Panel>
                </Collapse>
              )}
            />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}


export default AppPricing;