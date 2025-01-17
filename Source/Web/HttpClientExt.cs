﻿using CodeM.Common.Tools.Json;
using CodeM.Common.Tools.Xml;
using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace CodeM.Common.Tools.Web
{
    public class HttpResponseExt
    {
        private HttpStatusCode mStatusCode;
        private string mContent;

        public HttpResponseExt(HttpStatusCode statusCode, string content)
        {
            mStatusCode = statusCode;
            mContent = content;
        }

        public HttpStatusCode StatusCode
        {
            get
            {
                return mStatusCode;
            }
        }

        public string Content
        {
            get
            {
                return mContent;
            }
        }

        private dynamic mJsonObj = null;
        public dynamic Json
        {
            get
            {
                if (mJsonObj == null)
                {
                    try
                    {
                        mJsonObj = JsonConfigParser.New().Parse(mContent);
                    }
                    catch
                    {
                        throw new Exception("返回结果不是有效的JSON格式。");
                    }
                }
                return mJsonObj;
            }
        }

        private dynamic mXmlObj = null;
        public dynamic Xml
        {
            get
            {
                if (mXmlObj == null)
                {
                    try
                    {
                        mXmlObj = XmlTool.New().DeserializeFromString(mContent);
                    }
                    catch
                    {
                        throw new Exception("返回结果不是有效的XML格式。");
                    }
                }
                return mXmlObj;
            }
        }
    }

    public class HttpClientExt
    {
        private HttpClient mClient;

        private HttpRequestMessage mRequest = null;

        internal HttpClientExt(HttpClient client)
        {
            mClient = client;
        }

        private void InitRequest()
        {
            if (mRequest == null)
            {
                mRequest = new HttpRequestMessage();
            }
        }

        public TimeSpan Timeout
        {
            get
            {
                return mClient.Timeout;
            }
            set
            {
                mClient.Timeout = value;
            }
        }

        public Uri BaseAddress
        {
            get
            {
                return mClient.BaseAddress;
            }
            set
            {
                mClient.BaseAddress = value;
            }
        }

        public HttpClientExt AddDefaultHeader(string name, string value)
        {
            mClient.DefaultRequestHeaders.Add(name, value);
            return this;
        }

        public HttpClientExt AddRequestHeader(string name, string value)
        {
            InitRequest();
            mRequest.Headers.Add(name, value);
            return this;
        }

        public HttpClientExt AddRequestHeaderWithoutValidation(string name, string value)
        {
            InitRequest();
            mRequest.Headers.TryAddWithoutValidation(name, value);
            return this;
        }

        public HttpClientExt SetJsonContent(string content)
        {
            InitRequest();
            mRequest.Content = new StringContent(content, Encoding.UTF8, "application/json");
            return this;
        }

        public HttpClientExt SetJsonContent(dynamic obj)
        {
            InitRequest();
            mRequest.Content = new StringContent(obj.ToString(), Encoding.UTF8, "application/json");
            return this;
        }

        private async Task<HttpResponseExt> SendJsonAsync(string requestUri)
        {
            InitRequest();
            if (mClient.BaseAddress == null)
            {
                mRequest.RequestUri = new Uri(requestUri);
            }
            else
            {
                mRequest.RequestUri = new Uri(mClient.BaseAddress, requestUri);
            }

            HttpResponseMessage resp = await mClient.SendAsync(mRequest);
            
            mRequest.Headers.Clear();
            mRequest.Content = null;

            string content = string.Empty;
            if (resp.Content != null)
            {
                content = await resp.Content.ReadAsStringAsync();
            }
            return new HttpResponseExt(resp.StatusCode, content);
        }

        public async Task<HttpResponseExt> GetJsonAsync(string requestUri)
        {
            InitRequest();
            mRequest.Method = HttpMethod.Get;
            return await SendJsonAsync(requestUri);
        }

        public HttpResponseExt GetJson(string requestUri)
        {
            return GetJsonAsync(requestUri).GetAwaiter().GetResult();
        }

        public async Task<HttpResponseExt> PostJsonAsync(string requestUri)
        {
            InitRequest();
            mRequest.Method = HttpMethod.Post;
            return await SendJsonAsync(requestUri);
        }

        public HttpResponseExt PostJson(string requestUri)
        {
            return PostJsonAsync(requestUri).GetAwaiter().GetResult();
        }

        public async Task<HttpResponseExt> PutJsonAsync(string requestUri)
        {
            InitRequest();
            mRequest.Method = HttpMethod.Put;
            return await SendJsonAsync(requestUri);
        }

        public HttpResponseExt PutJson(string requestUri)
        {
            return PutJsonAsync(requestUri).GetAwaiter().GetResult();
        }

        public async Task<HttpResponseExt> DeleteJsonAsync(string requestUri)
        {
            InitRequest();
            mRequest.Method = HttpMethod.Delete;
            return await SendJsonAsync(requestUri);
        }

        public HttpResponseExt DeleteJson(string requestUri)
        {
            return DeleteJsonAsync(requestUri).GetAwaiter().GetResult();
        }

        public async Task<HttpResponseExt> PatchJsonAsync(string requestUri)
        {
            InitRequest();
            mRequest.Method = HttpMethod.Patch;
            return await SendJsonAsync(requestUri);
        }

        public HttpResponseExt PatchJson(string requestUri)
        {
            return PatchJsonAsync(requestUri).GetAwaiter().GetResult();
        }

        public async Task<HttpResponseExt> HeadJsonAsync(string requestUri)
        {
            InitRequest();
            mRequest.Method = HttpMethod.Head;
            return await SendJsonAsync(requestUri);
        }

        public HttpResponseExt HeadJson(string requestUri)
        {
            return HeadJsonAsync(requestUri).GetAwaiter().GetResult();
        }

        public async Task<HttpResponseExt> OptionsJsonAsync(string requestUri)
        {
            InitRequest();
            mRequest.Method = HttpMethod.Options;
            return await SendJsonAsync(requestUri);
        }

        public HttpResponseExt OptionsJson(string requestUri)
        {
            return OptionsJsonAsync(requestUri).GetAwaiter().GetResult();
        }
    }
}
