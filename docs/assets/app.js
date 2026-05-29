document.addEventListener('DOMContentLoaded', function () {
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

    if (!search || !nav || !empty) {
        return;
    }

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