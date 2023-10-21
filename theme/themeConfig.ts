import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  components: {
    Typography: {
      titleMarginBottom: 0,
    },
    Select: {
      colorBgContainer: 'rgba(0, 0, 0, 0.1)',
      colorText: 'white',
    }
  }
};

export default theme;