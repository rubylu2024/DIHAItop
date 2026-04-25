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
            "title": "说说你在的城市，一个月工资能买几平米？房价到底怎么涨？",
            "author": "房产观察家",
            "authorLevel": "Lv.3 中级会员",
            "authorAvatar": "房",
            "publishTime": "2026-04-17 10:30:45",
            "viewCount": 2345,
            "content": "<p>房价一直是大家关注的热点话题，尤其是在一线城市，房价的涨幅让很多年轻人望而却步。今天我们来讨论一下，在你所在的城市，一个月的工资能买几平米房子？</p><h3>一线城市情况</h3><p>在北京、上海、深圳等一线城市，房价普遍在每平米6-10万元之间，而平均工资大约在1-2万元左右。这意味着，一个月的工资只能买0.1-0.3平米的房子，想要买一套100平米的房子，需要工作30-50年。</p><h3>二线城市情况</h3><p>在杭州、南京、成都等二线城市，房价大约在每平米2-4万元之间，平均工资在8000-15000元左右。一个月的工资能买0.3-0.7平米的房子，相对一线城市压力小一些，但仍然需要20-30年才能买得起一套房子。</p><h3>房价上涨原因</h3><ol><li>土地供应不足，尤其是在核心城市</li><li>人口持续流入，增加了购房需求</li><li>投资需求旺盛，很多人将房产作为投资手段</li><li>货币供应量增加，导致资产价格上涨</li></ol><h3>网友讨论</h3><p>@北上广深漂：在深圳工作5年，月薪2万，依然买不起房，只能租房住。</p><p>@二线城市土著：在南京有套房，现在房价翻了一倍，感觉自己的资产增值了不少。</p><p>@刚毕业大学生：刚毕业工资6000，房价2万，不知道什么时候才能买得起房。</p><p>你所在的城市房价如何？一个月工资能买几平米？欢迎在评论区分享你的情况！</p>",
            "comments": [
                {"id": 1, "author": "房奴小明", "authorLevel": "Lv.2 初级会员", "authorAvatar": "沪", "time": "2026-04-18 09:15:32", "floor": 2, "content": "<p>坐标上海，月薪15k，房价8万/平，一个月工资能买0.1875平，想想就绝望...</p><p>工作5年了，连首付的零头都没攒够，感觉这辈子都买不起房了。</p>"},
                {"id": 2, "author": "杭州新市民", "authorLevel": "Lv.2 初级会员", "authorAvatar": "杭", "time": "2026-04-18 10:42:18", "floor": 3, "content": "<p>杭州城西，月薪12k，房价4万/平，一个月能买3平，努力几年还是有希望的！</p><p>打算再攒两年钱，加上家里支持一点，争取明年上车。</p>"},
                {"id": 3, "author": "成都安逸哥", "authorLevel": "Lv.4 高级会员", "authorAvatar": "蓉", "time": "2026-04-19 14:28:55", "floor": 4, "content": "<p>成都天府新区，月薪10k，房价2.5万/平，一个月能买4平，感觉压力还好。</p><p>成都生活节奏慢，房价相对友好，适合宜居。</p>"},
                {"id": 4, "author": "北京追梦人", "authorLevel": "Lv.1 新手上路", "authorAvatar": "京", "time": "2026-04-19 16:55:03", "floor": 5, "content": "<p>北京五环外，月薪20k，房价6万/平，一个月3.3平，但是首付太难了...</p><p>家里条件一般，全靠自己，不知道什么时候才能凑够首付。</p>"},
                {"id": 5, "author": "广州打工人", "authorLevel": "Lv.2 初级会员", "authorAvatar": "穗", "time": "2026-04-20 09:30:17", "floor": 6, "content": "<p>广州天河，月薪18k，房价5万/平，一个月3.6平，慢慢来吧。</p><p>相比北上深，广州的房价还是比较友好的，咬咬牙还是有希望的。</p>"},
                {"id": 6, "author": "武汉新青年", "authorLevel": "Lv.2 初级会员", "authorAvatar": "汉", "time": "2026-04-20 11:22:44", "floor": 7, "content": "<p>武汉光谷，月薪8k，房价1.8万/平，一个月4.4平，感觉还可以接受。</p><p>新一线里武汉性价比挺高的，发展也快，看好未来。</p>"},
                {"id": 7, "author": "深圳奋斗者", "authorLevel": "Lv.3 中级会员", "authorAvatar": "深", "time": "2026-04-21 15:48:30", "floor": 8, "content": "<p>深圳南山，月薪30k，房价12万/平，一个月2.5平，太难了太难了</p><p>准备回老家发展了，深圳实在是买不起，压力太大了。</p>"},
                {"id": 8, "author": "苏州小白领", "authorLevel": "Lv.2 初级会员", "authorAvatar": "苏", "time": "2026-04-21 17:15:08", "floor": 9, "content": "<p>苏州园区，月薪14k，房价3.5万/平，一个月4平，加油攒钱中</p><p>苏州环境好，离上海近，感觉是个不错的选择。</p>"},
                {"id": 9, "author": "重庆土著", "authorLevel": "Lv.3 中级会员", "authorAvatar": "渝", "time": "2026-04-22 10:30:00", "floor": 10, "content": "<p>重庆江北，月薪9k，房价1.5万/平，一个月6平！简直太幸福了！</p><p>重庆房价真的很良心，生活压力小很多，推荐大家来重庆发展。</p>"},
                {"id": 10, "author": "西安奋斗哥", "authorLevel": "Lv.2 初级会员", "authorAvatar": "陕", "time": "2026-04-22 14:20:15", "floor": 11, "content": "<p>西安高新区，月薪11k，房价2万/平，一个月5.5平，还可以接受。</p><p>西安发展很快，文化底蕴深厚，适合定居。</p>"},
                {"id": 11, "author": "厦门岛民", "authorLevel": "Lv.4 高级会员", "authorAvatar": "厦", "time": "2026-04-23 09:45:30", "floor": 12, "content": "<p>厦门岛内，月薪16k，房价6万/平，一个月2.67平，压力山大...</p><p>不过厦门环境真的好，面朝大海春暖花开，咬咬牙坚持吧。</p>"},
                {"id": 12, "author": "郑州上班族", "authorLevel": "Lv.2 初级会员", "authorAvatar": "豫", "time": "2026-04-23 16:00:00", "floor": 13, "content": "<p>郑州东区，月薪8k，房价1.6万/平，一个月5平，感觉还行。</p><p>郑州作为新一线，发展潜力大，房价相对友好。</p>"}
            ]
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
    
    // 浮窗广告（暂时屏蔽）
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

    threadContainer.innerHTML = `
        <div class="thread-header">
            <div class="thread-title">${postData.title}</div>
            <span>作者：<a href="#" style="color: #0066cc;">${postData.author}</a></span> | 
            <span>发表于：${postData.publishTime.split(' ')[0]}</span> | 
            <span>浏览：${postData.viewCount}次</span>
        </div>
        
        ${allPosts.map((post, index) => {
            const replyTo = post.replyTo ? allPosts.find(p => p.floor === post.replyTo) : null;
            const plainContent = post.content.replace(/<[^>]*>/g, '').substring(0, 50) + (post.content.replace(/<[^>]*>/g, '').length > 50 ? '...' : '');
            
            return `
                <div class="post" id="post-${post.floor}">
                    ${replyTo ? `
                        <div class="quote-box">
                            <div class="quote-author">引用 ${replyTo.author}(${replyTo.floor}楼) 的发言：</div>
                            <div class="quote-content">${replyTo.content.replace(/<[^>]*>/g, '').substring(0, 80)}${replyTo.content.replace(/<[^>]*>/g, '').length > 80 ? '...' : ''}</div>
                        </div>
                    ` : ''}
                    <div class="post-header">
                        <div class="poster-info">
                            <div class="avatar">${post.authorAvatar}</div>
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
                        <a href="#" class="reply-link" data-floor="${post.floor}" data-author="${post.author}" data-content="${plainContent}">回复</a>
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
            authorAvatar: name.charAt(0),
            time: new Date().toLocaleString('zh-CN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).replace(/\//g, '-'),
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
    
    let adWidth = 0;
    let adHeight = 0;
    let windowWidth = 0;
    let windowHeight = 0;
    let x = 20;
    let y = 0;
    let dx = 0.5;
    let dy = 0.5;
    let animationId = null;
    
    function updateDimensions() {
        adWidth = ad.offsetWidth;
        adHeight = ad.offsetHeight;
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        
        // 确保当前位置在边界内
        x = Math.max(0, Math.min(x, windowWidth - adWidth));
        y = Math.max(0, Math.min(y, windowHeight - adHeight));
    }
    
    function animate() {
        updateDimensions();
        
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
    
    // 等待广告元素完全渲染，获取正确的尺寸
    setTimeout(function() {
        updateDimensions();
        y = (windowHeight - adHeight) / 2;
        
        ad.style.left = x + 'px';
        ad.style.top = y + 'px';
        ad.style.transform = 'none';
        
        animate();
    }, 100);
    
    ad.addEventListener('mouseenter', function() {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
    
    ad.addEventListener('mouseleave', function() {
        updateDimensions();
        animate();
    });
    
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        updateDimensions();
    });
}

// 设置浮窗广告2
function setupFloatingAd2() {
    const ad = document.querySelector('.floating-ad2');
    if (!ad) return;
    
    // 立即显示浮窗广告
    ad.style.display = 'block';
    
    let adWidth = 0;
    let adHeight = 0;
    let windowWidth = 0;
    let windowHeight = 0;
    let x = 20;
    let y = 0;
    let dx = 0.5;
    let dy = 0.5;
    let animationId = null;
    
    function updateDimensions() {
        adWidth = ad.offsetWidth;
        adHeight = ad.offsetHeight;
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        
        // 确保当前位置在边界内
        x = Math.max(0, Math.min(x, windowWidth - adWidth));
        y = Math.max(0, Math.min(y, windowHeight - adHeight));
    }
    
    function animate() {
        updateDimensions();
        
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
    
    // 等待广告元素完全渲染，获取正确的尺寸
    setTimeout(function() {
        updateDimensions();
        y = (windowHeight - adHeight) / 2;
        
        ad.style.left = x + 'px';
        ad.style.top = y + 'px';
        ad.style.transform = 'none';
        
        animate();
    }, 100);
    
    ad.addEventListener('mouseenter', function() {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
    
    ad.addEventListener('mouseleave', function() {
        updateDimensions();
        animate();
    });
    
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        updateDimensions();
    });
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
    
    // 5秒后显示弹窗广告和左侧假关闭按钮
    setTimeout(function() {
        popupAd.style.display = 'block';
        if (leftCloseBtn) {
            leftCloseBtn.style.display = 'block';
            updateLeftCloseBtnPosition();
        }
    }, 5000);
    
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
}
