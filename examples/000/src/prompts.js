/**
 * 设置交互的问题
 * 1. mobile 还是 web
 * @type {Array}
 */
const inquirer = require('inquirer')

// const replaceFileQuestion = {
//   type: 'confirm',
//   message: `文件夹已存在，是否覆盖: `,
//   name: 'doReplaced',
//   default: true
// }

const versionQuestion = {
  type: 'input',
  message: `Version: `,
  name: 'version',
  default: '0.1.0',
  validate: function (val) {
    if (/^((\d){1,3}\.(\d){1,3}\.(\d){1,3})$/g.test(val)) {
      // 校验位数
      return true
    }
    return '请输入正确的格式[数字.数字.数字]，例如：11.22.33'
  }
}

const descriptionQuestion = {
  type: 'input',
  message: `请输入项目描述: `,
  name: 'description'
}

const templateQuestion = {
  type: 'list',
  message: `请选择要下载的模板: `,
  name: 'template',
  choices: [
    {
      name: 'web',
      value: 'web'
    },
    {
      name: 'mobile',
      value: 'mobile'
    }
  ]
}

const cliQuestion = {
  type: 'list',
  message: `请选择包管理工具: `,
  name: 'cli',
  choices: [
    {
      name: 'yarn',
      value: 'yarn'
    },
    {
      name: 'npm',
      value: 'npm install'
    },
    {
      name: 'cnpm',
      value: 'cnpm install'
    }
  ]
}

// console.info(/^((\d){1,3}\.(\d){1,3}\.(\d){1,3})$/g.test('0.1.0'))

async function getUserInputs(options) {
  let prompts = [versionQuestion, descriptionQuestion, templateQuestion, cliQuestion]
  const answers = await inquirer.prompt(prompts)
  return {
    ...answers,
    ...options
  }
}

module.exports = getUserInputs