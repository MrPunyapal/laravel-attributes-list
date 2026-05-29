document.addEventListener('DOMContentLoaded', function () {
    var applyTheme = function (theme) {
        if (theme !== 'dark' && theme !== 'light') {
            return;
        }

        document.documentElement.setAttribute('data-docsmith-theme', theme);
    };

    var savedTheme = null;

    try {
        savedTheme = window.localStorage.getItem('docsmith-theme');
    } catch (error) {
        savedTheme = null;
    }

    var initialTheme = savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    applyTheme(initialTheme);

    var themeToggle = document.querySelector('[data-docsmith-theme-toggle]');

    if (themeToggle) {
        var updateThemeLabel = function () {
            var activeTheme = document.documentElement.getAttribute('data-docsmith-theme') === 'dark' ? 'Dark' : 'Light';
            themeToggle.textContent = activeTheme;
        };

        updateThemeLabel();

        themeToggle.addEventListener('click', function () {
            var currentTheme = document.documentElement.getAttribute('data-docsmith-theme') === 'dark' ? 'dark' : 'light';
            var nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);

            try {
                window.localStorage.setItem('docsmith-theme', nextTheme);
            } catch (error) {
            }

            updateThemeLabel();
        });
    }

    var copyCode = function (value) {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            return navigator.clipboard.writeText(value);
        }

        return new Promise(function (resolve, reject) {
            var textarea = document.createElement('textarea');
            textarea.value = value;
            textarea.setAttribute('readonly', 'readonly');
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();

            try {
                var copied = document.execCommand('copy');
                document.body.removeChild(textarea);

                if (copied) {
                    resolve();
                    return;
                }

                reject(new Error('Copy command failed'));
            } catch (error) {
                document.body.removeChild(textarea);
                reject(error);
            }
        });
    };

    Array.prototype.slice.call(document.querySelectorAll('pre > code')).forEach(function (codeBlock) {
        var pre = codeBlock.parentElement;

        if (!pre || pre.querySelector('.code-copy-btn')) {
            return;
        }

        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'code-copy-btn';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code block');

        button.addEventListener('click', function () {
            var text = codeBlock.textContent || '';

            copyCode(text).then(function () {
                button.classList.add('copied');
                button.textContent = 'Copied';

                window.setTimeout(function () {
                    button.classList.remove('copied');
                    button.textContent = 'Copy';
                }, 1400);
            }).catch(function () {
                button.textContent = 'Failed';

                window.setTimeout(function () {
                    button.textContent = 'Copy';
                }, 1400);
            });
        });

        pre.appendChild(button);
    });

    var search = document.querySelector('[data-docsmith-search]');
    var nav = document.querySelector('[data-docsmith-nav]');
    var empty = document.querySelector('[data-docsmith-empty]');
    var results = document.querySelector('[data-docsmith-search-results]');
    var tocLinks = Array.prototype.slice.call(document.querySelectorAll('[data-docsmith-toc-link], .toc-links a[href^="#"]'));
    var tocHeadings = tocLinks.map(function (link) {
        var targetId = String(link.getAttribute('data-docsmith-toc-link') || link.getAttribute('href') || '').replace(/^#/, '');

        return targetId ? document.getElementById(targetId) : null;
    }).filter(function (heading) {
        return heading !== null;
    });

    if (!search || !nav || !empty) {
        return;
    }

    var rootPrefix = document.body && document.body.getAttribute('data-docsmith-root')
        ? String(document.body.getAttribute('data-docsmith-root'))
        : './';
    var searchIndexPromise = fetch(rootPrefix + 'search-index.json').then(function (response) {
        if (!response.ok) {
            return [];
        }

        return response.json();
    }).catch(function () {
        return [];
    });
    var escapeHtml = function (value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    var items = Array.prototype.slice.call(nav.querySelectorAll('[data-nav-item]'));
    var groups = Array.prototype.slice.call(nav.querySelectorAll('[data-nav-group]'));
    var toggles = Array.prototype.slice.call(nav.querySelectorAll('[data-nav-toggle]'));

    var setGroupOpen = function (group, open) {
        if (!group) {
            return;
        }

        group.classList.toggle('is-open', open);

        var toggle = group.querySelector('[data-nav-toggle]');

        if (toggle) {
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
    };

    var openOnlyGroup = function (groupToOpen) {
        groups.forEach(function (group) {
            setGroupOpen(group, group === groupToOpen);
        });
    };

    var setActiveTocLink = function (hash) {
        var activeId = String(hash || '').replace(/^#/, '');

        tocLinks.forEach(function (link) {
            var linkTarget = String(link.getAttribute('data-docsmith-toc-link') || link.getAttribute('href') || '').replace(/^#/, '');
            var isActive = activeId !== '' && linkTarget === activeId;
            link.classList.toggle('is-active', isActive);

            if (isActive) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    var syncTocToScroll = function () {
        if (tocHeadings.length === 0) {
            return;
        }

        var currentHeading = null;

        for (var index = 0; index < tocHeadings.length; index++) {
            var heading = tocHeadings[index];

            if (!heading) {
                continue;
            }

            var headingRect = heading.getBoundingClientRect();

            if (headingRect.top <= 120) {
                currentHeading = heading;
            }
        }

        if (!currentHeading) {
            currentHeading = tocHeadings[0];
        }

        if (currentHeading && currentHeading.id) {
            setActiveTocLink('#' + currentHeading.id);
        }
    };

    var syncTocScheduled = false;
    var requestTocSync = function () {
        if (syncTocScheduled) {
            return;
        }

        syncTocScheduled = true;

        window.requestAnimationFrame(function () {
            syncTocScheduled = false;
            syncTocToScroll();
        });
    };

    if (tocLinks.length > 0) {
        setActiveTocLink(window.location.hash);
        syncTocToScroll();

        window.addEventListener('hashchange', function () {
            setActiveTocLink(window.location.hash);
        });

        window.addEventListener('scroll', requestTocSync, { passive: true });

        tocLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                var targetHash = String(link.getAttribute('href') || '');

                setActiveTocLink(targetHash);
            });
        });
    }

    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            var group = toggle.closest('[data-nav-group]');

            if (!group) {
                return;
            }

            var isOpen = group.classList.contains('is-open');

            if (isOpen) {
                setGroupOpen(group, false);
                return;
            }

            openOnlyGroup(group);
        });
    });

    var update = function () {
        var query = String(search.value || '').toLowerCase().trim();
        var visible = 0;

        items.forEach(function (item) {
            var searchable = String(item.getAttribute('data-search') || item.getAttribute('data-title') || '').toLowerCase();
            var matches = query === '' || searchable.indexOf(query) !== -1;

            item.style.display = matches ? '' : 'none';

            if (matches) {
                visible++;
            }
        });

        groups.forEach(function (group) {
            var groupItems = group.querySelectorAll('[data-nav-item]');
            var groupVisible = Array.prototype.some.call(groupItems, function (item) {
                return item.style.display !== 'none';
            });

            group.style.display = groupVisible ? '' : 'none';
        });

        var openVisibleGroup = groups.find(function (group) {
            return group.classList.contains('is-open') && group.style.display !== 'none';
        });

        if (openVisibleGroup) {
            openOnlyGroup(openVisibleGroup);
        } else {
            var firstVisibleGroup = groups.find(function (group) {
                return group.style.display !== 'none';
            });

            if (firstVisibleGroup) {
                openOnlyGroup(firstVisibleGroup);
            }
        }

        empty.style.display = visible === 0 ? 'block' : 'none';

        if (!results) {
            return;
        }

        if (query.length < 2) {
            results.innerHTML = '';
            results.hidden = true;
            return;
        }

        searchIndexPromise.then(function (entries) {
            if (!Array.isArray(entries)) {
                results.innerHTML = '';
                results.hidden = true;
                return;
            }

            var scored = entries.map(function (entry) {
                if (!entry || typeof entry !== 'object') {
                    return null;
                }

                var title = String(entry.title || '');
                var description = String(entry.description || '');
                var headings = String(entry.headings || '');
                var content = String(entry.content || '');
                var haystack = (title + ' ' + description + ' ' + headings + ' ' + content).toLowerCase();

                if (haystack.indexOf(query) === -1) {
                    return null;
                }

                var score = 1;
                var lowerTitle = title.toLowerCase();
                var lowerDescription = description.toLowerCase();
                var lowerHeadings = headings.toLowerCase();

                if (lowerTitle === query) {
                    score += 120;
                } else if (lowerTitle.indexOf(query) !== -1) {
                    score += 70;
                }

                if (lowerHeadings.indexOf(query) !== -1) {
                    score += 25;
                }

                if (lowerDescription.indexOf(query) !== -1) {
                    score += 12;
                }

                return {
                    title: title,
                    description: description,
                    url: String(entry.url || '/'),
                    score: score
                };
            }).filter(function (entry) {
                return entry !== null;
            }).sort(function (left, right) {
                if (left.score === right.score) {
                    return left.title.localeCompare(right.title);
                }

                return right.score - left.score;
            }).slice(0, 8);

            if (scored.length === 0) {
                results.innerHTML = '';
                results.hidden = true;
                return;
            }

            var normalizeHref = function (url) {
                var normalized = String(url || '/').replace(/^\/+/, '');

                if (normalized === '') {
                    return rootPrefix;
                }

                if (!normalized.endsWith('/')) {
                    normalized += '/';
                }

                return rootPrefix + normalized;
            };

            results.innerHTML = scored.map(function (entry) {
                var meta = entry.description !== '' ? entry.description : entry.url;
                return '<a class="search-result" href="' + normalizeHref(entry.url) + '">'
                    + '<span class="search-result-title">' + escapeHtml(entry.title) + '</span>'
                    + '<span class="search-result-meta">' + escapeHtml(meta) + '</span>'
                    + '</a>';
            }).join('');

            results.hidden = false;
        });
    };

    var activeItem = nav.querySelector('[data-nav-item].active');

    if (activeItem) {
        var activeGroup = activeItem.closest('[data-nav-group]');
        openOnlyGroup(activeGroup);

        requestAnimationFrame(function () {
            activeItem.scrollIntoView({ block: 'center', behavior: 'smooth' });
        });
    }

    search.addEventListener('input', update);
    update();
});