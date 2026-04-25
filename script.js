// 动态加载帖子数据
async function loadPostData(postId) {
    try {
        const response = await fetch(`data/post_${postId}.json`);
        if (!response.ok) {
            throw new Error(`帖子数据文件不存在: post_${postId}.json`);
        }
        return await response.json();
    } catch (error) {
        console.warn('加载帖子数据失败，使用备用数据:', error);
        return getFallbackPostData(postId);
    }
}

// 备用帖子数据（fallback）
function getFallbackPostData(postId) {
    const fallbackData = {
        "1": {
            "id": 1,
            "title": "【城市论坛】说说你在的城市，一个月工资能买几平米？房价到底怎么涨？",
            "author": "☆_房产の观察家_☆",
            "authorLevel": "Lv.3 中级会员",
            "authorAvatar": "images/用户头像.png",
            "publishTime": "2010-04-17 10:30:45",
            "viewCount": 2345,
            "content": "<p>房价一直是大家关注的热点话题，尤其是在一线城市，房价的涨幅让很多年轻人望而却步。今天我们来讨论一下，在你所在的城市，一个月的工资能买几平米房子？</p><h3>一线城市情况</h3><p>在北京、上海、深圳等一线城市，房价普遍在每平米1-3万元之间（2010年数据），而平均工资大约在3000-6000元左右。这意味着，一个月的工资只能买0.2-0.4平米的房子，想要买一套100平米的房子，不吃不喝也得几十年。</p><h3>二线城市情况</h3><p>在杭州、南京、成都等二线城市，房价大约在每平米8000-15000元之间，平均工资在2000-4000元左右。一个月的工资能买0.25-0.5平米的房子，压力同样不小。</p><h3>网友讨论</h3><p>@神马都是浮云：在深圳工作3年，月薪4000，依然买不起房，只能租房住，也是醉了。</p><p>@给跪了：在南京有套房，现在房价翻了一倍，感觉自己要发财了，不解释。</p><p>@杯具的小明：刚毕业工资2000，房价1万，你造吗？我勒个去！</p><p>你所在的城市房价如何？一个月工资能买几平米？欢迎在评论区分享你的情况！</p>",
            "comments": [
                {"id": 1, "author": "ゞ泪流满面的小明ζ", "authorLevel": "Lv.2 初级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-18 09:15:32", "floor": 2, "content": "<p>前排占座！坐标上海，月薪3500，房价2万/平，一个月工资能买0.175平，想想就泪流满面... T_T</p><p>工作3年了，连首付的零头都没攒够，神马都是浮云啊！</p>"},
                {"id": 2, "author": "oοゞ杭州新市民ゞοo", "authorLevel": "Lv.2 初级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-18 10:42:18", "floor": 3, "content": "<p>沙发！杭州城西，月薪3000，房价1.2万/平，一个月能买0.25平，努力几年还是有希望的！</p><p>打算再攒两年钱，加上家里支持一点，争取明年上车. 给跪了！</p>"},
                {"id": 3, "author": "成都安逸哥(￣▽￣)", "authorLevel": "Lv.4 高级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-19 14:28:55", "floor": 4, "content": "<p>板凳。成都二环路，月薪2500，房价6000/平，一个月能买0.4平，感觉压力还好。</p><p>成都生活节奏慢，房价相对友好，适合宜居。赞一个，不解释！</p>"},
                {"id": 4, "author": "ξ北京追梦人ξ", "authorLevel": "Lv.1 新手上路", "authorAvatar": "images/用户头像.png", "time": "2010-04-19 16:55:03", "floor": 5, "content": "<p>地板。北京五环外，月薪4000，房价1.5万/平，一个月0.26平，但是首付太难了... 也是醉了。</p><p>家里条件一般，全靠自己，不知道什么时候才能凑够首付. 我勒个去！</p>"},
                {"id": 5, "author": "广州打工人_bule", "authorLevel": "Lv.2 初级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-20 09:30:17", "floor": 6, "content": "<p>地下室。广州天河，月薪3500，房价1.2万/平，一个月0.29平，慢慢来吧。</p><p>相比北上深，广州的房价还是比较友好的，咬咬牙还是有希望的. 给力！</p>"},
                {"id": 6, "author": "火钳留名の武汉新青年", "authorLevel": "Lv.2 初级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-20 11:22:44", "floor": 7, "content": "<p>路过打酱油。武汉光谷，月薪2000，房价5000/平，一个月0.4平，感觉还可以接受。</p><p>新一线里武汉性价比挺高的，发展也快，看好未来. 火钳留名！</p>"},
                {"id": 7, "author": "↘深圳奋斗者↖", "authorLevel": "Lv.3 中级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-21 15:48:30", "floor": 8, "content": "<p>围观。深圳南山，月薪5000，房价2.5万/平，一个月0.2平，太难了太难了. 你造吗？</p><p>准备回老家发展了，深圳实在是买不起，压力太大了. 鸭梨山大啊！</p>"},
                {"id": 8, "author": "苏州小白领(^_−)☆", "authorLevel": "Lv.2 初级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-21 17:15:08", "floor": 9, "content": "<p>潜水多年冒个泡。苏州园区，月薪3000，房价8000/平，一个月0.375平，加油攒钱中。</p><p>苏州环境好，离上海近，感觉是个不错的选择. 妥妥的！</p>"},
                {"id": 9, "author": "✿重庆土著✿", "authorLevel": "Lv.3 中级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-22 10:30:00", "floor": 10, "content": "<p>重庆江北，月薪2200，房价4000/平，一个月0.55平！简直太幸福了！</p><p>重庆房价真的很良心，生活压力小很多，推荐大家来重庆发展. 各种羡慕嫉妒恨！</p>"},
                {"id": 10, "author": "西安奋斗哥+1", "authorLevel": "Lv.2 初级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-22 14:20:15", "floor": 11, "content": "<p>西安高新区，月薪2800，房价5500/平，一个月0.5平，还可以接受。</p><p>西安发展很快，文化底蕴深厚，适合定居. 楼上+1！</p>"},
                {"id": 11, "author": "坑爹o厦门岛民", "authorLevel": "Lv.4 高级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-23 09:45:30", "floor": 12, "content": "<p>厦门岛内，月薪3500，房价1.5万/平，一个月0.23平，压力山大...</p><p>不过厦门环境真的好，面朝大海春暖花开，咬咬牙坚持吧. 坑爹啊！</p>"},
                {"id": 12, "author": "郑州上班族(元芳你怎么看)", "authorLevel": "Lv.2 初级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-23 16:00:00", "floor": 13, "content": "<p>郑州东区，月薪2000，房价5000/平，一个月0.4平，感觉还行。</p><p>郑州作为中原核心，发展潜力大，房价相对友好. 元芳，你怎么看？</p>"},
                {"id": 13, "author": "楼中楼测试员", "authorLevel": "Lv.1 新手上路", "authorAvatar": "images/用户头像.png", "time": "2010-04-24 10:00:00", "floor": 14, "content": "<p>你说得对，上海的房价确实让人望尘莫及. 我也是醉了。</p>", "replyTo": 2},
                {"id": 14, "author": "深度评论家", "authorLevel": "Lv.5 社区元老", "authorAvatar": "images/用户头像.png", "time": "2010-04-24 11:30:00", "floor": 15, "content": "<p>我也觉得上海的生活成本太高了，其实二线城市也不错. 给力不解释！</p>", "replyTo": 14},
                {"id": 15, "author": "终极回复者", "authorLevel": "Lv.2 初级会员", "authorAvatar": "images/用户头像.png", "time": "2010-04-24 12:45:00", "floor": 16, "content": "<p>赞同楼上的深度分析！现在的年轻人确实需要更多的选择. 火钳留名！</p>", "replyTo": 15}
            ]
        },
        "2": {
            "id": 2,
            "title": "关于开展“拒绝黄赌毒、共建平安社区”宣传教育活动的通知",
            "author": "宁水市公安局闵江分局治安大队",
            "authorLevel": "Lv.5 社区元老",
            "authorAvatar": "images/用户头像.png",
            "publishTime": "2012-08-20 09:00:00",
            "viewCount": 567,
            "allowComments": false,
            "content": "<p>福云路沿街各商铺、彩票销售网点、棋牌室、网吧、茶楼及全体居民：</p><p>近期接群众反映，我辖区个别场所存在疑似聚众赌博、地下字谜投注等不良现象。为进一步净化社区环境，特此重申：</p><p>一、严禁任何形式的赌博行为。包括但不限于：以营利为目的的棋牌局、利用网络平台进行的第三方投注、以“字画竞猜”或“生肖走势分析”为名义的变相聚赌。</p><p>二、彩票销售网点须持证经营。不得私自提供开奖趋势图、“内部参考图”或任何形式的“规律分析图”，不得向未成年人出售彩票。所谓“福粮”“内参”“玄机”等非法印刷品一经发现，立即收缴。</p><p>三、棋牌室、茶楼等场所须在晚23时前停止营业。严禁以“朋友消遣”为名组织大规模现金麻将局，不得容留陌生人员进行约定时间的轮换牌局。如有发现按聚众赌博论处</p><p>四、警惕以“文化交流”为名的非法出版物。近期发现有人以“字花”旧报合订本等形式夹带敏感内容向中老年人兜售。此类物品中常印有所谓“某某大师独家解密”等诱导性话术，本质是赌博投注的变体，请居民一旦发现及时举报。</p><p>五、请将本公告张贴于各楼栋单元入口。本周三上午九点将在福云小区中心广场举办“平安社区”现场宣讲，届时会有实物展示（含近期查获的印刷品如“福粮图”教具）供居民辨别。</p><p>举报电话：宁水市公安局闵江分局治安大队 053X-XXXXXXX<br>宁水市闵江区福云路街道办<br>2012年8月20日</p>",
            "comments": []
        }
    };
    return fallbackData[postId] || null;
}


// 获取帖子列表（从data文件夹读取）
async function loadPostList() {
    const postList = [];
    const postIds = [1, 2, 3, 4, 5];
    
    for (const id of postIds) {
        try {
            const response = await fetch(`data/post_${id}.json`);
            if (response.ok) {
                const post = await response.json();
                postList.push({
                    id: post.id,
                    title: post.title,
                    author: post.author,
                    date: post.publishTime.split(' ')[0],
                    views: post.viewCount
                });
            }
        } catch (error) {
            // 如果文件不存在，跳过
        }
    }
    return postList;
}

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 清理所有遗留的localStorage数据
    localStorage.clear();
    
    // 检查是否是帖子详情页面
    if (window.location.pathname.includes('post.html')) {
        loadPostDetailsFromJson();
    }
    
    // 平滑滚动效果
    setupSmoothScroll();
    
    // 浮窗广告
    // setupFloatingAd();
    setupFloatingAd2();
    
    // 右下角弹窗广告
    setupPopupAd();
    
    // 音频控制
    setupAudio();
    
    // 更新用户导航链接
    updateUserLinks();
    
    // 将近期热帖滚动区域滚动到顶部
    const scrollableContent = document.querySelector('.scrollable-content');
    if (scrollableContent) {
        scrollableContent.scrollTop = 0;
    }
});

// 设置音频控制
function setupAudio() {
    const audio = document.getElementById('background-music');
    const audioToggle = document.getElementById('audio-toggle');
    
    if (audio && audioToggle) {
        // 初始状态为暂停
        audio.pause();
        audioToggle.classList.add('paused');
        
        // 点击切换播放状态
        audioToggle.addEventListener('click', function() {
            if (audio.paused) {
                audio.play().catch(function(error) {
                    console.log('Audio playback prevented:', error);
                });
                audioToggle.classList.remove('paused');
            } else {
                audio.pause();
                audioToggle.classList.add('paused');
            }
        });
        
        // 监听播放状态
        audio.addEventListener('play', function() {
            audioToggle.classList.remove('paused');
        });
        
        audio.addEventListener('pause', function() {
            audioToggle.classList.add('paused');
        });
    }
}

// 从JSON文件加载帖子详情并渲染
async function loadPostDetailsFromJson() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id') || '1';
    
    const postData = await loadPostData(postId);
    if (!postData) {
        console.error('无法加载帖子数据');
        return;
    }
    
    renderForumThread(postData);
}

// 渲染论坛帖子
function renderForumThread(postData) {
    const threadContainer = document.querySelector('.forum-thread');
    if (!threadContainer) return;

    // 更新页面标题
    document.title = `红蜻蜓论坛.Beta - ${postData.title}`;

    // 处理不可回帖的情况
    const replyBox = document.getElementById('reply-box');
    if (replyBox) {
        if (postData.allowComments === false) {
            replyBox.innerHTML = '<div class="comments-disabled-msg" style="padding: 20px; text-align: center; color: #666; background: #f9f9f9; border: 1px solid #ddd; margin-top: 20px;">该帖子已设置不可回帖</div>';
        } else {
            // 恢复回帖表单（如果之前被禁用了）
            if (replyBox.querySelector('.comments-disabled-msg')) {
                replyBox.innerHTML = `
                    <h4>发表回复</h4>
                    <form class="reply-form" id="reply-form">
                        <input type="text" id="reply-name" placeholder="您的昵称">
                        <textarea id="reply-content" placeholder="分享你的看法..."></textarea>
                        <input type="hidden" id="reply-target" name="reply-target" value="">
                        <div>
                            <button type="submit">发表回复</button>
                            <a href="#" class="cancel-reply" id="cancel-reply" style="display: none;">取消回复</a>
                        </div>
                    </form>
                `;
                // 重新绑定提交事件（因为 innerHTML 会移除事件监听）
                setupReplyForm();
            }
        }
    }

    const allPosts = [{
        id: 0,
        author: postData.author,
        authorLevel: postData.authorLevel,
        authorAvatar: postData.authorAvatar,
        time: postData.publishTime,
        floor: 1,
        content: postData.content,
        isOp: true,
        replyTo: null
    }, ...postData.comments];

    // 递归生成引用 HTML
    function generateQuoteHTML(replyToFloor, allPosts, depth = 0) {
        if (!replyToFloor || depth >= 3) return '';
        const target = allPosts.find(p => p.floor === replyToFloor);
        if (!target) return '';

        const parentQuote = generateQuoteHTML(target.replyTo, allPosts, depth + 1);
        const plainContent = target.content.replace(/<[^>]*>/g, '').substring(0, 100);
        
        return `
            <div class="quote-box quote-level-${depth}">
                ${parentQuote}
                <div class="quote-author">引用 ${target.author}(${target.floor}楼) 的发言：</div>
                <div class="quote-content">${plainContent}${target.content.replace(/<[^>]*>/g, '').length > 100 ? '...' : ''}</div>
            </div>
        `;
    }

    threadContainer.innerHTML = `
        <div class="thread-header">
            <div class="thread-title">${postData.title}</div>
            <span>作者：<a href="#" style="color: #0066cc;">${postData.author}</a></span> | 
            <span>发表于：${postData.publishTime.split(' ')[0]}</span> | 
            <span>浏览：${postData.viewCount}次</span>
        </div>
        
        ${allPosts.map((post, index) => {
            const quoteHTML = generateQuoteHTML(post.replyTo, allPosts);
            const plainContent = post.content.replace(/<[^>]*>/g, '').substring(0, 50) + (post.content.replace(/<[^>]*>/g, '').length > 50 ? '...' : '');
            
            return `
                <div class="post" id="post-${post.floor}">
                    ${quoteHTML}
                    <div class="post-header">
                        <div class="poster-info">
                            <div class="avatar"><img src="${post.authorAvatar}" alt="avatar" style="width:100%; height:100%; border-radius:3px; object-fit:cover;"></div>
                            <div>
                                <div class="poster-name ${post.isOp ? 'op' : ''}">${post.author}</div>
                                <div style="font-size: 11px; color: #999;">${post.authorLevel}</div>
                            </div>
                        </div>
                        <div class="post-time">${post.time}</div>
                    </div>
                    <div class="post-content">${post.content}</div>
                    <div class="floor-info">
                        <span class="floor-number">${post.floor}楼</span>
                        ${postData.allowComments !== false ? `<a href="#" class="reply-link" data-floor="${post.floor}" data-author="${post.author}" data-content="${plainContent}">回复</a>` : ''}
                    </div>
                </div>
            `;
        }).join('')}
        
        <div class="forum-stats">
            <span>共 ${postData.comments.length} 条回复</span>
            <span>最后回复：${postData.comments.length > 0 ? postData.comments[postData.comments.length - 1].time : postData.publishTime}</span>
        </div>
    `;

    setupReplyButtons(postData);
}

// 设置回复按钮
function setupReplyButtons(postData) {
    const replyLinks = document.querySelectorAll('.reply-link');
    const replyTargetInput = document.getElementById('reply-target');
    const cancelReply = document.getElementById('cancel-reply');
    const replyContent = document.getElementById('reply-content');
    const replyBoxTitle = document.querySelector('.reply-box h4');

    replyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const floor = this.dataset.floor;
            const author = this.dataset.author;
            const content = this.dataset.content;
            
            replyTargetInput.value = floor;
            replyContent.value = `回复 ${author}(${floor}楼)：\n`;
            replyBoxTitle.textContent = `回复 ${author}(${floor}楼)`;
            cancelReply.style.display = 'inline';
            replyContent.focus();
        });
    });

    cancelReply.addEventListener('click', function(e) {
        e.preventDefault();
        replyTargetInput.value = '';
        replyContent.value = '';
        replyBoxTitle.textContent = '发表回复';
        cancelReply.style.display = 'none';
    });

    const replyForm = document.getElementById('reply-form');
    replyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('reply-name').value.trim();
        const content = replyContent.value.trim();
        const replyTo = replyTargetInput.value;

        if (!name) {
            alert('请输入昵称');
            return;
        }
        
        if (!content) {
            alert('请输入回复内容');
            return;
        }

        const newComment = {
            id: Date.now(),
            author: name,
            authorLevel: 'Lv.1 新手上路',
            authorAvatar: 'images/用户头像.png',
            time: "2010-04-25 " + new Date().toLocaleTimeString('zh-CN', { hour12: false }),
            floor: postData.comments.length + 2,
            content: `<p>${content.replace(/\n/g, '</p><p>')}</p>`,
            replyTo: replyTo ? parseInt(replyTo) : null
        };

        postData.comments.push(newComment);
        
        localStorage.setItem(`post_${postData.id}_new_comments`, JSON.stringify(postData.comments));
        
        renderForumThread(postData);
        
        replyForm.reset();
        replyTargetInput.value = '';
        replyBoxTitle.textContent = '发表回复';
        cancelReply.style.display = 'none';
        
        alert('回复发表成功！');
    });
}

// 更新用户导航链接
function updateUserLinks() {
    const userLinksContainer = document.getElementById('user-links-container');
    if (!userLinksContainer) return;
    
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    
    if (userLoggedIn) {
        userLinksContainer.innerHTML = `
            <a href="profile.html">个人资料</a>
            <a href="#" id="logout-btn">退出登录</a>
        `;
        
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('userLoggedIn');
                localStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            });
        }
    } else {
        userLinksContainer.innerHTML = `
            <a href="user-login.html">登录</a>
            <a href="register.html">注册</a>
        `;
    }
}

// 设置平滑滚动
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 设置浮窗导航图标
function setupFloatingAd() {
    const ad = document.querySelector('.floating-ad');
    if (!ad) return;
    
    // 立即显示浮窗导航图标
    ad.style.display = 'block';
    ad.style.position = 'fixed'; // 确保是 fixed 布局
    
    let adWidth = 0;
    let adHeight = 0;
    let windowWidth = 0;
    let windowHeight = 0;
    
    // 随机初始位置和速度
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    let dx = (Math.random() > 0.5 ? 1 : -1) * (0.75 + Math.random() * 1);
    let dy = (Math.random() > 0.5 ? 1 : -1) * (0.75 + Math.random() * 1);
    let animationId = null;
    let isPaused = false;
    
    function updateDimensions() {
        adWidth = ad.offsetWidth;
        adHeight = ad.offsetHeight;
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    }
    
    function animate() {
        if (isPaused) return;

        // 边界检测和反弹
        if (x + adWidth >= windowWidth) {
            x = windowWidth - adWidth;
            dx = -Math.abs(dx);
        } else if (x <= 0) {
            x = 0;
            dx = Math.abs(dx);
        }
        
        if (y + adHeight >= windowHeight) {
            y = windowHeight - adHeight;
            dy = -Math.abs(dy);
        } else if (y <= 0) {
            y = 0;
            dy = Math.abs(dy);
        }
        
        x += dx;
        y += dy;
        
        ad.style.left = x + 'px';
        ad.style.top = y + 'px';
        ad.style.transform = 'none';
        
        animationId = requestAnimationFrame(animate);
    }
    
    // 等待加载后开始
    window.addEventListener('load', function() {
        updateDimensions();
        animate();
    });
    
    ad.addEventListener('mouseenter', function() {
        isPaused = true;
    });
    
    ad.addEventListener('mouseleave', function() {
        isPaused = false;
        updateDimensions();
        animate();
    });
    
    window.addEventListener('resize', updateDimensions);
}

// 设置浮窗广告2
function setupFloatingAd2() {
    const ad = document.querySelector('.floating-ad2');
    if (!ad) return;
    
    // 立即显示浮窗广告
    ad.style.display = 'block';
    ad.style.position = 'fixed';
    
    let adWidth = 0;
    let adHeight = 0;
    let windowWidth = 0;
    let windowHeight = 0;
    
    // 随机初始位置和速度
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    let dx = (Math.random() > 0.5 ? 1 : -1) * (0.75 + Math.random() * 1);
    let dy = (Math.random() > 0.5 ? 1 : -1) * (0.75 + Math.random() * 1);
    let animationId = null;
    let isPaused = false;
    
    function updateDimensions() {
        adWidth = ad.offsetWidth;
        adHeight = ad.offsetHeight;
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    }
    
    function animate() {
        if (isPaused) return;

        // 边界检测和反弹
        if (x + adWidth >= windowWidth) {
            x = windowWidth - adWidth;
            dx = -Math.abs(dx);
        } else if (x <= 0) {
            x = 0;
            dx = Math.abs(dx);
        }
        
        if (y + adHeight >= windowHeight) {
            y = windowHeight - adHeight;
            dy = -Math.abs(dy);
        } else if (y <= 0) {
            y = 0;
            dy = Math.abs(dy);
        }
        
        x += dx;
        y += dy;
        
        ad.style.left = x + 'px';
        ad.style.top = y + 'px';
        ad.style.transform = 'none';
        
        animationId = requestAnimationFrame(animate);
    }
    
    // 等待加载后开始
    window.addEventListener('load', function() {
        updateDimensions();
        animate();
    });
    
    ad.addEventListener('mouseenter', function() {
        isPaused = true;
    });
    
    ad.addEventListener('mouseleave', function() {
        isPaused = false;
        updateDimensions();
        animate();
    });
    
    window.addEventListener('resize', updateDimensions);
}

// 设置右下角弹窗广告
function setupPopupAd() {
    const popupAd = document.querySelector('.popup-ad');
    if (!popupAd) return;
    
    const closeButton = popupAd.querySelector('.popup-close');
    if (!closeButton) return;
    
    const leftCloseBtn = document.querySelector('.left-close-btn');
    const popupAudio = document.getElementById('popup-audio');
    
    function updateLeftCloseBtnPosition() {
        if (leftCloseBtn && popupAd.style.display === 'block') {
            const popupHeight = popupAd.offsetHeight;
            leftCloseBtn.style.bottom = popupHeight + 'px';
            leftCloseBtn.style.right = '0';
        }
    }
    
    // 立即显示弹窗广告和左侧假关闭按钮
    setTimeout(function() {
        console.log('Showing popup ad...');
        popupAd.style.display = 'block';
        popupAd.style.visibility = 'visible';
        popupAd.style.opacity = '1';
        if (leftCloseBtn) {
            leftCloseBtn.style.display = 'block';
            leftCloseBtn.style.visibility = 'visible';
            leftCloseBtn.style.opacity = '1';
            updateLeftCloseBtnPosition();
        }
    }, 3000);
    
    // 鼠标悬停时开始动画和播放音频
    popupAd.addEventListener('mouseenter', function() {
        popupAd.style.animation = 'pulse 0.5s infinite ease-in-out';
        if (popupAudio) {
            popupAudio.play().catch(function(error) {
                console.log('Popup audio playback prevented:', error);
            });
        }
    });
    
    // 鼠标移开时停止动画和暂停音频
    popupAd.addEventListener('mouseleave', function() {
        popupAd.style.animation = 'none';
        if (popupAudio) {
            popupAudio.pause();
        }
    });
    
    // 监听窗口大小变化，更新假关闭按钮位置
    window.addEventListener('resize', function() {
        updateLeftCloseBtnPosition();
    });
    
    closeButton.addEventListener('click', function() {
        popupAd.style.display = 'none';
        if (leftCloseBtn) {
            leftCloseBtn.style.display = 'none';
        }
        if (popupAudio) {
            popupAudio.pause();
        }
    });

    // 处理假关闭按钮的点击跳转，隐藏链接预览
    if (leftCloseBtn) {
        const fakeCloseBtn = leftCloseBtn.querySelector('.popup-close');
        if (fakeCloseBtn) {
            fakeCloseBtn.addEventListener('click', function() {
                const url = this.getAttribute('data-href');
                if (url) {
                    window.open(url, '_blank');
                }
            });
        }
    }
}
