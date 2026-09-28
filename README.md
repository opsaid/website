# OPSaid.net 生成产物

此仓库用于托管 [opsaid.net](https://opsaid.net) 的公开静态产物。

- `docs/` 包含产品门户和 `/docs/` 文档子站，由私有源码仓的 GitHub Actions 自动生成并同步。
- 请勿直接编辑或提交 `docs/` 下的 HTML、CSS、JavaScript 等文件；下一次发布会覆盖这些修改。
- 内容变更、主题调整和发布配置统一在私有源码仓中通过 Pull Request 审核。
- 本仓库可以继续用于收集公开 Issue，但不作为文档源码仓。

生成提交使用以下格式记录对应的源码版本：

```text
deploy: opsaid-net@<source-sha>
```
