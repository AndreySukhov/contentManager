/* DATA START */
const JSON1 = {
  'default_lang': 'en',
  'translations': {
    'tst1537516667557_content': {
      'en': 'Some ads content tailored for you!',
      'ru': 'Some ads content tailored for you!'
    },
    'tst1537516667425_title': {
      'en': 'Hello there, click me!😍😍😗',
      'ru': 'Hello there, click me!😍😍😗'
    },
    '1537517715331_url': {
      'en': 'http://localhost:8080/#/apps/14/campaigns/32/messages/1260',
      'ru': 'http://localhost:8080/#/apps/14/campaigns/32/messages/1260'
    },
    '1537516813264_text': {
      'en': 'Go',
      'ru': 'Пошли'
    },
    '1537516813264_url': {
      'en': 'http://localhost:8080/#/apps/14/campaigns/32/messages/1260',
      'ru': 'http://localhost:8080/#/apps/14/campaigns/32/messages/1260'
    },
    '1537516667557_content': {
      'en': '<p>Hello there, click <strong>me</strong>!😍😍😗</p><p>Hello <strong>there</strong>, click me!😍😍😗</p><p>Hello there, click me!😍😍😗</p>',
      'ru': '<p>Hello there, click <strong>me</strong>!😍😍😗</p><p>Hello <strong>there</strong>, click me!😍😍😗</p><p>Hello there, click me!😍😍😗</p>'
    },
    '1537516667425_title': {
      'en': 'Hello there, click me!😍😍😗',
      'ru': 'Hello there, click me!😍😍😗'
    },
    'tst1537516667557_title': {
      'en': 'Some ads content tailored for you!',
      'ru': 'Hello there, click me!😍😍😗'
    },
    '1537516835947_text': {
      'en': 'No',
      'ru': 'Нет'
    },
    '1537516667557_title': {
      'en': 'Hello there, click me!😍😍😗',
      'ru': 'Hello there, click me!😍😍😗'
    },
    '1537517776829_text': {
      'en': 'Cancel',
      'ru': 'Ноуп'
    },
    '1537516667425_content': {
      'en': '<p>Hello there, click <strong>me</strong>!😍😍😗</p><p>Hello <strong>there</strong>, click me!😍😍😗</p><p>Hello there, click me!😍😍😗</p>',
      'ru': '<p>Hello there, click <strong>me</strong>!😍😍😗</p><p>Hello <strong>there</strong>, click me!😍😍😗</p><p>Hello there, click me!😍😍😗</p>'
    },
    '1537517715331_text': {
      'en': 'OK',
      'ru': 'OK'
    },
    'tst1537516667425_content': {
      'en': 'Some ads content tailored for you!',
      'ru': 'Some ads content tailored for you!'
    }
  },
  'android': {
    'notification': {
      'use_sound': 1,
      'use_vibration': 1,
      'landing': {
        '1537516835947': {
          'type': 'dismiss'
        },
        '1537516813264': {
          'weblink': {
            'url': '1537516813264_url'
          },
          'type': 'weblink'
        },
        '1537516667425': {
          'type': 'activity',
          'activity': {
            'dismiss_landing': 'dismiss',
            'dismiss_actions': [],
            'template': {
              'top_image_url': 'http://localhost:8080/assets/static/uploads/4/3/4/88cda-bd74-11e8-b847-2c34f5f7abf7.png',
              'image_url': 'http://localhost:8080/assets/static/uploads/4/c/b/a0c76-bd74-11e8-9151-7014f5f7abf7.png',
              'content': '1537516667425_content',
              'name': 'image_and_text',
              'title': '1537516667425_title'
            },
            'buttons': [
              {
                'actions': [],
                'text': '1537516813264_text',
                'landing': 1537516813264
              },
              {
                'actions': [],
                'text': '1537516835947_text',
                'landing': 1537516835947
              }
            ]
          }
        }
      },
      'toast': {
        'icon_url': 'http://localhost:8080/assets/static/uploads/1/1/0/d7336-3820-11e8-916d-2d751581665b.png',
        'dismiss_actions': [],
        'content': 'tst1537516667425_content',
        'landing': '1537516667425',
        'dismiss_landing': 'dismiss',
        'big_image_url': 'http://localhost:8080/assets/static/uploads/1/7/2/fa5e0-3820-11e8-916d-2d751581665b.png',
        'id': 'tst1537516667425',
        'title': 'tst1537516667425_title',
        'buttons': []
      },
      'use_led': 1
    },
    'type': 'notification'
  },
  'ios': {
    'notification': {
      'use_sound': 1,
      'use_vibration': 1,
      'landing': {
        '1537517776829': {
          'type': 'dismiss'
        },
        '1537516667557': {
          'type': 'activity',
          'activity': {
            'dismiss_landing': 'dismiss',
            'dismiss_actions': [],
            'template': {
              'top_image_url': 'http://localhost:8080/assets/static/uploads/4/3/4/88cda-bd74-11e8-b847-2c34f5f7abf7.png',
              'image_url': 'http://localhost:8080/assets/static/uploads/4/c/b/a0c76-bd74-11e8-9151-7014f5f7abf7.png',
              'content': '1537516667557_content',
              'name': 'image_and_text',
              'title': '1537516667557_title'
            },
            'buttons': [
              {
                'actions': [],
                'text': '1537517715331_text',
                'landing': 1537517715331
              },
              {
                'actions': [],
                'text': '1537517776829_text',
                'landing': 1537517776829
              }
            ]
          }
        },
        '1537517715331': {
          'weblink': {
            'url': '1537517715331_url'
          },
          'type': 'weblink'
        }
      },
      'toast': {
        'icon_url': 'http://localhost:8080/assets/static/uploads/1/1/0/d7336-3820-11e8-916d-2d751581665b.png',
        'dismiss_actions': [],
        'content': 'tst1537516667557_content',
        'landing': '1537516667557',
        'dismiss_landing': 'dismiss',
        'big_image_url': 'http://localhost:8080/assets/static/uploads/4/c/b/a0c76-bd74-11e8-9151-7014f5f7abf7.png',
        'id': 'tst1537516667557',
        'title': 'tst1537516667557_title',
        'buttons': []
      },
      'use_led': 1
    },
    'type': 'notification'
  }
};

const JSON2 = {
  'default_lang': 'empty',
  'translations': {
    'tst1534929418347_title': {
      'en': 'title'
    },
    '1534929418347_url': {
      'en': 'www.ru'
    },
    'tst1534929418557_content': {
      'en': 'content'
    },
    '1534929418557_url': {
      'en': 'www.com'
    },
    'tst1534929418347_content': {
      'en': 'content'
    },
    'tst1534929418557_title': {
      'en': 'title'
    }
  },
  'android': {
    'notification': {
      'use_sound': 0,
      'use_vibration': 0,
      'landing': {
        '1534929418347': {
          'deeplink': {
            'url': '1534929418347_url'
          },
          'type': 'deeplink'
        }
      },
      'toast': {
        'icon_url': '',
        'dismiss_actions': [],
        'content': 'tst1534929418347_content',
        'landing': '1534929418347',
        'dismiss_landing': 'dismiss',
        'big_image_url': '',
        'id': 'tst1534929418347',
        'title': 'tst1534929418347_title',
        'buttons': []
      },
      'use_led': 0
    },
    'type': 'notification'
  },
  'ios': {
    'notification': {
      'use_sound': 0,
      'use_vibration': 0,
      'landing': {
        '1534929418557': {
          'deeplink': {
            'url': '1534929418557_url'
          },
          'type': 'deeplink'
        }
      },
      'toast': {
        'icon_url': '',
        'dismiss_actions': [],
        'content': 'tst1534929418557_content',
        'landing': '1534929418557',
        'dismiss_landing': 'dismiss',
        'big_image_url': '',
        'id': 'tst1534929418557',
        'title': 'tst1534929418557_title',
        'buttons': []
      },
      'use_led': 0
    },
    'type': 'notification'
  }
};

export { JSON1, JSON2 };

/* DATA END */