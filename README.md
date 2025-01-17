<div align="center">
<article style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <p align="center"><img width="256" src="http://res.dayuan.tech/images/xmtool.png" /></p>
    <p>
        一个简单易用的.NetCore工具类库（持续集成中...）
    </p>
</article>
</div>


##  :beginner: 简介

Xmtool是一个基于.NetCore的常用功能集成工具类库，目的是做成一个像Java语言中的Hutool类似的工具库，将和具体业务逻辑无关的常用功能进行抽象和封装，集成到一个类库中，方便使用维护，提升开发效率。



## :package:安装

##### Package Manager

```shell
Install-Package Xmtool -Version 2.0.3
```

##### .NET CLI

```shell
dotnet add package Xmtool --version 2.0.3
```

##### PackageReference

```xml
<PackageReference Include="Xmtool" Version="2.0.3" />
```

##### Paket CLI

```shell
paket add Xmtool --version 2.0.3
```



## :hammer_and_wrench:使用说明

Xmtool为了方便调用，将所有功能统一封装集成到静态类Xmtool中，在调用相应方法时，全部以Xmtool为入口，根据方法所属功能分类逐级调用即可；同时在一定程度上支持了链式调用，大大提升了使用便利性，也使代码看起来更加优雅。

###### 例：生成一个4位的数字短信验证码。

```c#
public string GetSmsCode()
{
    string code = Xmtool.Random().RandomCaptcha(4, true);
    return code;
}
```

###### 例：判断字符串是否有效手机号码

```c#
public bool IsMobile(string str)
{
    return Xmtool.Regex().IsMobile(str);
}
```



## :pencil:文档

- [日期时间](https://softwaiter.github.io/Xmtool/#/0201)
- [正则表达式](https://softwaiter.github.io/Xmtool/#/0202)
- [加密解密](https://softwaiter.github.io/Xmtool/#/0203)
- [散列算法](https://softwaiter.github.io/Xmtool/#/0204)
- [随机值](https://softwaiter.github.io/Xmtool/#/0205)
- [发送邮件](https://softwaiter.github.io/Xmtool/#/0206)
- [发送短信](https://softwaiter.github.io/Xmtool/#/0207)
- [类型判断](https://softwaiter.github.io/Xmtool/#/0208)
- [XML读取](https://softwaiter.github.io/Xmtool/#/0209)
- [Web操作](https://softwaiter.github.io/Xmtool/#/0210)
- [图形验证码](https://softwaiter.github.io/Xmtool/#/0211)
- [扩展动态对象](https://softwaiter.github.io/Xmtool/#/0212)
- [JSON配置文件](https://softwaiter.github.io/Xmtool/#/0213)



# 🎈 协议

Xmtool 使用 [MIT 协议](https://github.com/softwaiter/Xmtool/blob/master/LICENSE)
