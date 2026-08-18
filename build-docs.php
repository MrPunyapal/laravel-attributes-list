<?php

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Docsmith\Docsmith;

Docsmith::make()
    ->readmeIndex(__DIR__ . '/README.md')
    ->readmeSkipSections(['Notes', 'Contributing', 'Author', 'Install'])
    ->output(__DIR__ . '/docs')
    ->title('Laravel PHP Attributes List')
    ->description('A curated list of PHP Attributes available in Laravel Framework.')
    ->siteUrl('https://mrpunyapal.github.io/laravel-attributes-list')
    ->repositoryUrl('https://github.com/mrpunyapal/laravel-attributes-list')
    ->editBranch('main')
    ->ogGeneratedPerPage()
    ->build();